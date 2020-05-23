import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { increment, decrement } from '../../Store/Actions/BuyItems'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.setState({
            products: this.props.data.JsonData
        })
    }

    increment = (index) => {
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
                    <TouchableOpacity style={styles.controlButton} onPress={() => this.decrement(item.id)}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{ padding: 10 }}>{item.numberOfItems}</Text>
                    <TouchableOpacity style={styles.controlButton} onPress={() => this.increment(item.id)}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    submitItems = () => {
        let arrayItems = this.props.data.JsonData
        alert(JSON.stringify(arrayItems))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: .8, justifyContent: "center", width: "100%", padding: 20}}>
                    <FlatList

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
                <TouchableOpacity onPress = {() => this.submitItems()}>
                    <View style={styles.submitButton} >
                        <Text style={{color:"white"}}>Submit</Text>
                    </View>

                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})
const mapDispatchToProps = (dispatch) => ({
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id))
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    listItem: {
        flexDirection: "row",
        height: 60,
        justifyContent: "space-between",
        alignItems: "center"
    },
    controlContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 20,
        //backgroundColor: "red"
    },
    controlButton: {
        width: 30,
        height: 30,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center"
    },
    submitButton: {
        height: 40,
        width: "90%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        alignSelf: "center"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)