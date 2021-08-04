import React from "react";

import Point from "./components/Point";
import Editor from "./components/Editor";
import Content from "./components/Content";
import Overlay from "./components/Overlay";

import PointSelector from "./utils/PointSelector";

export default {
  innerRef: () => {},
  onChange: () => {},
  onSubmit: () => {},
  type: PointSelector.TYPE,
  selectors: [PointSelector],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  activeAnnotationComparator: (a, b) => a === b,
  renderSelector: ({ annotation }) => <Point annotation={annotation} />,
  renderEditor: ({ annotation, onChange, onSubmit }) => (
    <Editor annotation={annotation} onChange={onChange} onSubmit={onSubmit} />
  ),
  renderHighlight: ({ key, annotation, active }) => (
    <Point key={key} annotation={annotation} active={active} />
  ),
  renderContent: ({ key, annotation }) => (
    <Content key={key} annotation={annotation} />
  ),
  renderOverlay: ({ type, annotation }) => {
    switch (type) {
      case PointSelector.TYPE:
        return <Overlay>Click to Annotate</Overlay>;
      default:
        return <Overlay>Click and Drag to Annotate</Overlay>;
    }
  },
};
