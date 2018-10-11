import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Menu from 'antd/lib/menu';

class CategoryMenuView extends Component {


    renderMenus = (categories) => {
        if (categories.length > 0) {   
            let menulist = [];  
            categories.map((cat) => {
                let link = "/category/"+cat.slug;
                return menulist.push(<Menu.Item key={cat.slug}><Link to={link}>{cat.name}</Link></Menu.Item>);
              }); 
            return menulist;
        }
        else return [];
    }

    render() {
        let menus  = this.renderMenus(this.props.categories);
        let selected = [];
        if(this.props.active){
            selected.push(this.props.active);
        }
        return (
            <div className="categoryMenus">
                <Menu mode="horizontal" className="categoryNavigation" selectedKeys={selected}>
                    {menus}
                </Menu>
            </div>
        );
    }
}

CategoryMenuView.propTypes = {
   categories: PropTypes.array.isRequired,
   active: PropTypes.string.isRequired,
};

export default withRouter(CategoryMenuView);
