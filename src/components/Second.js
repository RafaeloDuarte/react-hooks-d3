import React, { useRef, useState, useEffect } from 'react';
import { select, line, curveCardinal } from 'd3'

function Second() {

    const [data, setData] = useState([25, 30, 45, 60, 20])
    const svgRef = useRef()

    useEffect(() => {
        const svg = select(svgRef.current)
        const myLine = line()
            .x((value, index) => index * 50)
            .y(value => 150 - value)
            .curve(curveCardinal)

        svg.selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "blue")
    }, [data])

    return (
        <>
            <svg ref={svgRef}></svg>
            <button onClick={() => setData(data.map(value => value + 5))}>Update</button>
        </>
    );
};

export default Second;