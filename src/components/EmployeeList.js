import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { StyleSheet, ListView, Text } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';


class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);

    }

    componentWillReceiveProps(nextProps) {
        //nextProps is the next set of props this component will be rencered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees); 
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />
    }

    render() {
        console.log(this.props)
        return (
            // <Text>AAA</Text>
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
  
        );
    }
}

///////////////////////////////////////////////////////
//
// employeesFetch action returns state.employees Object 
//
//  -LV2uneBq96l3KYW5BqC:{
//      name: "Jane"
//      phone: "012345678"
//      shift: "Monday"
//  }
// -LV2xHfH1N_7UshX1UB0:{
//      name: "Kevin"
//      phone: "0109999999"
//      shift: "Wednesday"
//  }
/////////////////////////////////////////////////////////////

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid)=> { //(value= val, key= uid)
        return {
            ...val, uid 
            //{name: "Jane", phone: "012345678", shift: "Monday", id: LV2uneBq96l3KYW5BqC}
        };  //.map convert the return object into array then assign to 'employees'
    })
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);