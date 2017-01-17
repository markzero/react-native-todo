import React, {Component} from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity,
  TextInput} from 'react-native'

class Row extends Component {
  render() {
    const {complete, onComplete, onRemove,
      text, onUpdate, onToggleEdit, editing} = this.props

    const textComponent = (
      <TouchableOpacity style={styles.textWrap}
        onLongPress={() => {onToggleEdit(true)}}>
        <Text style={[styles.text, complete && styles.complete]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )

    const removeButton = (
      <TouchableOpacity style={styles.destroy}
        onPress={onRemove}>
          <Text>X</Text>
      </TouchableOpacity>
    )

    const editingComponent = (
      <View style={styles.textWrap}>
        <TextInput onChangeText={onUpdate}
          autoFocus
          value={text}
          style={styles.input}
          multiline
        />
      </View>
    )

    const doneButton = (
      <TouchableOpacity
        style={styles.done}
        onPress={() => onToggleEdit(false)}>
        <Text style={styles.doneText}>Save</Text>
      </TouchableOpacity>
    )

    return (
      <View style={styles.containter}>
        <Switch
          value={complete}
          onValueChange={onComplete}
        />
        {editing ? editingComponent : textComponent}
        {editing ? doneButton : removeButton}
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
  input: {
    height: 100,
    flex: 1,
    fontSize: 24,
    padding: 0,
    color: '#4D4D4D'
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
  },
  done: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7be290',
    padding: 7
  },
  doneText: {
    color: '#4D4D4D',
    fontSize: 20
  }
})

export default Row
