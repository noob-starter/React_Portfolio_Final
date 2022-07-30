import React, { Component } from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import styled from 'styled-components'
import { motion } from 'framer-motion'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MainContainer = styled(motion.div)`
background-color: #FAE6FA;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
position : absolute;
top: 20%;
left 20%;
width: 800px;
height: 400px;
@media (max-width: 500px) {
    top: 20%;
	left 20%;
	width: 300px;
	height: 150px;
  }
`

class CGPAChart extends Component {
	constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	}
	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}
	
	render() {	
		const options = {
			animationEnabled: true,
			theme: "light2", 
			title: {
				text: "Bachelor of Engineering SGPA Grades"
			},
			axisY: {
				title: "SGPA (On a Scale of 10)",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "All Semesters (Academic Year 2019-2023)",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: " 1 ", y: 9.11},
					{ label: " 2 ", y: 9.00},
					{ label: " 3 ", y: 6.90},
					{ label: " 4 ", y: 8.32},
					{ label: " 5 ", y: 8.64},
					{ label: " 6 ", y: 8.26},
					{ label: " 7 ", y: 0},
					{ label: " 8 ", y: 0}	
				]
			}]
		}
						
		return (
			<MainContainer>
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
		</div>
		</MainContainer>
		);
	} 			
}
 
export default CGPAChart;        