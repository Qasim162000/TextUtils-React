import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    // Method 1:
    // return word.charAt(0).toUpperCase() + word.slice(1);

    // Method 2:
    let firstCapitalized = word[0].toUpperCase();
    return firstCapitalized + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
