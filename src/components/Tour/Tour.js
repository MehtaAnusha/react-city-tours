import React, { Component } from 'react'
import  './Tour.scss'

export default class Tour extends Component {
    state={
        isShowInfo: false
    }
    handleInfo=() => {
        this.setState({
            isShowInfo:!this.isShowInfo
        })
    }
    render() {
        
        const {isShowInfo}=this.state
        console.log(isShowInfo);
        const {id,city, img,name,info}=this.props.tour
        //console.log("insde tour",city, img,name,info);
         return (
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} alt='tour-img' />
                     <span className='close-btn'>
                        <i className="fas fa-window-close" ></i>
                    </span>
                 </div>
                 <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info {""}
                        <span onClick={this.handleInfo} >
                            <i className='fas fa-caret-square-down'></i>
                        </span>
                    </h5>
                    {isShowInfo && <p>{info}</p>}
                    

                 </div>
            </article>
        )
    }
}
