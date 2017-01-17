import React, {Component} from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native'

class Row extends Component {
  render() {
    const {complete, onComplete, onRemove} = this.props
    return (
      <View style={styles.containter}>
        <Switch
          value={complete}
          onValueChange={onComplete}
        />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]}>
            {this.props.text}
          </Text>
        </View>
        <TouchableOpacity style={styles.destroy}
          onPress={onRemove}>
            <Text>X</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    color: '#4D4D4D'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    textDecorationLine: 'line-through'
  }
})

export default Row
