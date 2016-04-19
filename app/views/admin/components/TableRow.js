import React, { Component } from 'react'
import { Link } from 'react-router'

export default (props) => {
  return(
    <tr>
      <td>
        <Link to={{ pathname:`/projects/${props.data.key}`, state: {fetchProjectDets: true} }} >
          {props.data.projectName}
        </Link>
      </td>
      <td>0%</td>
    </tr>
  )
}
