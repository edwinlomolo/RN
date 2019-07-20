import React from "react"
import { SectionList } from "react-native"

const ContactList = props => (
  <SectionList
    renderItem={props.renderItem}
    renderSectionHeader={props.renderSectionHeader}
    sections={[{
      title: "A",
      data: props.contacts
    }]}
  />
)

export default ContactList
