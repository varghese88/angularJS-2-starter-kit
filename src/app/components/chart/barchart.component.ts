import { Directive, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({
    selector:'bar-chart'
})

export class BarChart implements OnInit{
    constructor(private element:ElementRef){
        
    }
    ngOnInit(){
        let data = [
            {
                "country":"india",
                "gdp":20.6
            },
            {
                country:"Canada",
                gdp:40.6
            },
            {
                country:"Norway",
                gdp:60.6
            },
            {
                country:"Newzland",
                gdp:0.6
            },
            {
                country:"Australia",
                gdp:0.6
            },
            {
                country:"united states",
                gdp:20.6
            },{
                country:"china",
                gdp:34.6
            }
            ];
            console.log(this.element.nativeElement.offsetHeight);
        
        let containerHeight = this.element.nativeElement.offsetHeight;
        let containerWidth = this.element.nativeElement.offsetWidth;
        let margin = {left:containerWidth*0.08, right:containerWidth*0.015,top:containerHeight*0.04,bottom:containerHeight*0.2},
            width = containerWidth - margin.left -margin.right,
            height = containerHeight - margin.top - margin.bottom;
        console.log(containerHeight+''+containerWidth);
        //define svg
        let svg = d3.select(this.element.nativeElement)
                    .append('svg')
                    .attr("width",containerWidth)
                    .attr("height",containerHeight)
                    .append('g')
                    .attr('transform','translate('+margin.left+','+ margin.top+')');

        //define scale

        let xScale = d3.scaleBand()
                       .rangeRound([0,width])
                       .padding(0.2);
        let yScale = d3.scaleLinear()
                       .range([height,0]);

        //define axis

        let xAxis = d3.axisBottom(xScale);
        let yAxis = d3.axisLeft(yScale);

        data.forEach((d)=>{
            d.gdp = +d.gdp;
        });

        data.sort((a,b)=>{
            return b.gdp - a.gdp;
        });
        var arr = data.map((d)=>{ return d.country;})
        console.log(arr);
        xScale.domain(data.map((d)=>{ return d.country;}));
        yScale.domain([0,d3.max(data,(d)=>{return d.gdp})]);

        console.log(data);
        svg.selectAll('rect')
           .data(data)
           .enter()
           .append('rect')
           .attr("x",(d)=>{ return xScale(d.country);})
           .attr("y",(d)=>{ return yScale(d.gdp);})
           .attr("fill","black")
           .attr("width",xScale.bandwidth())
           .attr("height",(d)=>{return height - yScale(d.gdp)});

        svg.selectAll('text')
           .data(data)
           .enter()
           .append('text')
           .text((d)=>{return d.gdp;})
           .attr('x',(d)=>{return xScale(d.country);})
           .attr('y',(d)=>{return yScale(d.gdp);})


        svg.append('g')
           .attr('class','x axis')
           .attr('transform','translate(0,'+height+')')
           .call(xAxis)
           .selectAll('text')
           .attr('transform','rotate(-60)')
           .style('text-anchor','end');

        svg.append('g')
           .attr('class','y axis')
           .call(yAxis);
    }
}