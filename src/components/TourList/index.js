import './TourList.scss'
 import React, { Component } from 'react'
 import Tour from '../Tour/Tour'
import {tourData} from '../tourData'
 
 export default class TourList extends Component {
     state ={
         tours:tourData,
     }
     render() {
         console.log(this.state.tours);
         const {tours} =this.state;
         //const {isInfoShow} = this.state.isInfoShow;
         //console.log("show info",isInfoShow);
         return (
             <section className='tourList'>
                 {tours.map(tour => {
                     return (
                        <Tour key={tour.id}
                         tour={tour}  />
                     )
                 })}
             </section>
         )
     }
 }
 