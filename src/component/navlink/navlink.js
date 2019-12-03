import React from "react"
import { TabBar } from "antd-mobile"
import { PropTypes } from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

@withRouter
@connect(state=>state.chat)
class LinkBarNav extends React.Component{

    static propTypes = {
        data: PropTypes.array.isRequired
    }




    render(){
        let Item = TabBar.Item
        let NavList =  this.props.data
        let pathName = this.props.location.pathname
        return<TabBar >
            {NavList.filter((v)=>!v.hide).map((v)=>{
                return<Item
                    badge={v.path=="/msg"?this.props.unread:0}
                    key={v.title}
                    title={v.title}
                    icon={{uri:require(`./img/${v.icon}.png`)}}
                    selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
                    selected = {v.path === pathName}
                    onPress = {()=>this.props.history.push(v.path)}>
                </Item>
            })}
        </TabBar>
    }

}

export default LinkBarNav