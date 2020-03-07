import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { select, scaleBand, scaleLinear, axisBottom, axisRight, line, curveCardinal } from 'd3'

export default function HookReduxBarChart() {

    const svgRef = useRef()
    const indicePrecos = useSelector(state => state.data)
    const dispatch = useDispatch()
    function addCourse() {
        const data35 = {
            type: 'ADD_COURSE',
            title: 'GraphQL',
            preco: 'R$ 9,41',
            precoConcorrente: '10,15'
        }
        dispatch({
            type: data35.type,
            data: data35
        })
    }

    function ajustaPreco(preco) {
        if (preco) return Number(preco.replace(',', '.').replace('R$', '').trim())
    }

    function media(precoConc, preco) {
        return (precoConc * 100) / preco
    }

    function drawChart() {
        const data = indicePrecos.map(indice => media(
            ajustaPreco(indice.precoConcorrente),
            ajustaPreco(indice.preco)
        ))
        const svg = select(svgRef.current);
        const xScale = scaleBand()
            .domain([0, 1, 2, 3])
            .range([0, 300])
            .padding(0.5);

        const yScale = scaleLinear()
            .domain([0, 150])
            .range([150, 0]);

        const xAxis = axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(index => index);
        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = axisRight(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis);

        const colorScale = scaleLinear()
            .domain([0, 50, 150])
            .range(["green", "orange", "red"])
            .clamp(true)

        // generates the "d" attribute of a path element
        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal);

        // renders path element, and attaches
        // the "d" attribute from line generator above

        const sjt = []
        indicePrecos.map(indice => sjt.push(100))
        console.log(sjt)

        svg
            .selectAll(".line")
            .data([sjt])
            .join("path")
            .attr("class", "line")
            .attr("d", myLine)
            .attr("fill", "none")
            .attr("stroke", "blue");

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", colorScale)
            .style("transform", "scale(1,-1)")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .attr("height", value => 150 - yScale(value))

    }

    useEffect(() => {
        drawChart()
    })

    return (
        <>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </>
    )
}