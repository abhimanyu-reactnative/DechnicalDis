import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductsJson from '../DummyData/Products.json'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import {increment, decrement} from '../../Store/Actions/BuyItems'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.setState({
            products: this.props.iPhone.JsonData
        })
    }

    increment = (index) =>{
        this.props.increment(index)
    }
    decrement = (index) => {
        this.props.decrement(index)
    }
    renderProductItem = (item) => {
      
        return (
            <View style={styles.listItem}>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
            <View style={styles.controlContainer}>
                <TouchableOpacity style={styles.controlButton} onPress={()=>this.decrement(item.id)}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={{padding: 10}}>{item.numberOfItems}</Text>
                <TouchableOpacity style={styles.controlButton} onPress={()=>this.increment(item.id)}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style= {{flex:1}}
                    data={this.state.products}
                    renderItem={({ item }) => this.renderProductItem(item)}
                    keyExtractor={(item, index) => item.id}
                    ItemSeparatorComponent={() =>
                        <View
                            style={{
                                height: 0.5,
                                width: "90%",
                                backgroundColor: "lightgrey"
                            }}
                        />
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    iPhone: state.iPhone
})
const mapDispatchToProps = (dispatch) => ({
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id))
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
        flexDirection: "row",
        height: 60,
        width: 400,
        justifyContent: "space-between"
    },
    controlContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
        paddingRight: 20
    },
    controlButton: {
        width: 30,
        height: 30
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)