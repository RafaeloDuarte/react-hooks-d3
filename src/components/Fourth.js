import React, { useRef, useEffect, useState } from "react";
import {
    select,
    line,
    curveCardinal,
    axisBottom,
    axisRight,
    scaleLinear,
    scaleBand
} from "d3";

function Fourth() {
    const [data, setData] = useState([30, 45, 60, 20, 65, 75]);
    const svgRef = useRef();

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);
        const xScale = scaleBand()
            .domain([0, 1, 2, 3, 4, 5])
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

    }, [data]);

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => setData(data.map(value => value + 5))}>
                Update data
      </button>
            <button onClick={() => setData(data.filter(value => value < 35))}>
                Filter data
      </button>
        </>
    );
}

export default Fourth;