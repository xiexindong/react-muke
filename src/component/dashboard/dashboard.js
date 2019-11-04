import React, { Component } from "react"
import { NavBar,TabBar,Card } from "antd-mobile"
import { connect } from "react-redux"
import { withRouter ,Switch ,Route} from "react-router-dom"
import LinkBarNav from "../navlink/navlink"

function Boss() {
    return<div>Boss</div>
}

function Genius() {
    return<h1>Genius</h1>
}

function Info() {
    return<h1>Info</h1>
}

function Msg() {
    return<h1>Msg</h1>
}


@withRouter
@connect(state=>state.user,null)
class DashBoard extends Component{
    render(){
        let pathname = this.props.location.pathname
        let User = this.props.type;

        let navLink = [
            {
                title:"牛人列表",
                icon:"boss",
                path:"/boss",
                hide:User == "genius",
                component:Genius
            },
            {
                title:"BOSS列表",
                icon:"job",
                path:"/genius",
                hide:User =="Boss",
                component:Boss
            },
            {
                title:"消息",
                icon:"msg",
                path:"/msg",
                component:Msg
            },
            {
                title:"个人中心",
                icon:"user",
                path:"/me",
                component:Info
            }
        ]
        return<div className="footer-header-bar">
            <NavBar mode="dark" className="fixd-header">{navLink.find((v)=>v.path == pathname).title}</NavBar>
            <div style={{marginTop:45}}>
                  <Switch>
                      {
                          navLink.map(function (v) {
                              return<Route key={v.path} path={v.path} component={v.component} ></Route>
                          })
                      }
                  </Switch>
            </div>
            <LinkBarNav data = { navLink }></LinkBarNav>
        </div>
    }
}

export default DashBoard