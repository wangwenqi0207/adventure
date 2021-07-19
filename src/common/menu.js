import React from 'react'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const menus = [
    {
        key:'1',
        icon:<PieChartOutlined />,
        name:'图表分析',
        path:'./home'
    },
    {
        key:'sub1',
        icon:<UserOutlined />,
        name:'角色管理',
        children:[
            {
                key:'sub1-1',
                icon:<UserOutlined />,
                name:'角色设置',  
                path:'./user'
            },
            {
                key:'sub1-2',
                name:'主题设置',
                path:'./user'  
            },
        ]
    },
    {
        key:'2',
        icon:<DesktopOutlined />,
        name:'系统设置',
        path:'./user'
    },
    {
        key:'sub2',
        icon:<FileOutlined />,
        name:'文件设置',
        children:[
            {
                key:'sub2-1',
                icon:<TeamOutlined />,
                name:'历史文件',
                path:'/file'  
            },
            {
                key:'sub2-2',
                name:'最新文件',  
                path:'/file'
            },
        ]
    },
]

export default menus