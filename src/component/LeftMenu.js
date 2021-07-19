import React from 'react'
import { Menu} from 'antd';

import { Link } from 'react-router-dom'
import  _  from 'lodash';

import menus from '../common/menu'


const { SubMenu } = Menu;


class LeftMenu extends React.Component {
  render() {
    return (
        <>
         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             {
                 !_.isEmpty(menus) ?_.map(menus,item=>{
                    if(item['children']){
                        return(    
                            <SubMenu key={item['key']} icon={item['icon']} title={item['name']}>
                                {
                                    !_.isEmpty(item['children']) ? _.map(item['children'],childItem=>{
                                        return(
                                            <Link to={childItem['path']} key={childItem['key']}>
                                                <Menu.Item key={childItem['key']} icon={!_.isEmpty(childItem['icon']) ? childItem['icon'] :null} >{childItem['name']}</Menu.Item>
                                            </Link>
                                        )
                                    }):null
                                }
                            </SubMenu>
                        )
                    }else{
                        return(
                            <Menu.Item key={item['key']}  icon={ item['icon'] } >
                                <Link to={item['path']}>{item['name']}</Link>
                            </Menu.Item>
                        )
                    }
                 }):null
             }
        </Menu>
        </>
    );
  }
}

export default LeftMenu