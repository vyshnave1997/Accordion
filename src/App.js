import React, { useState } from "react";
import "./App.css"; // Include all CSS styles here

// Basic Accordion
const BasicAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="basic-accordion">
      {items.map((item, index) => (
        <div key={index} className="basic-accordion-item">
          <div
            className="basic-accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div className="basic-accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Animated Accordion
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animated-accordion">
      {items.map((item, index) => (
        <div key={index} className="animated-accordion-item">
          <div
            className="animated-accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          <TransitionGroup>
            {openIndex === index && (
              <CSSTransition timeout={300} classNames="accordion-content">
                <div className="animated-accordion-content">{item.content}</div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

// Multi Accordion
const MultiAccordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="multi-accordion">
      {items.map((item, index) => (
        <div key={index} className="multi-accordion-item">
          <div
            className="multi-accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          {openIndexes.includes(index) && (
            <div className="multi-accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Nested Accordion
const NestedAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [nestedIndex, setNestedIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setNestedIndex(null); // Reset nested index when top-level changes
  };

  const handleNestedToggle = (index) => {
    setNestedIndex(nestedIndex === index ? null : index);
  };

  return (
    <div className="nested-accordion">
      {items.map((item, index) => (
        <div key={index} className="nested-accordion-item">
          <div
            className="nested-accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div className="nested-accordion-content">
              {item.content}
              {item.subItems && (
                <div className="nested-sub-items">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="nested-sub-item">
                      <div
                        className="nested-sub-header"
                        onClick={() => handleNestedToggle(subIndex)}
                      >
                        {subItem.title}
                      </div>
                      {nestedIndex === subIndex && (
                        <div className="nested-sub-content">
                          {subItem.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// App Component
const App = () => {
  const basicItems = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  const animatedItems = [
    { title: "Animated Section 1", content: "Animated content for section 1" },
    { title: "Animated Section 2", content: "Animated content for section 2" },
    { title: "Animated Section 3", content: "Animated content for section 3" },
  ];

  const multiItems = [
    { title: "Multi Section 1", content: "Multi content for section 1" },
    { title: "Multi Section 2", content: "Multi content for section 2" },
    { title: "Multi Section 3", content: "Multi content for section 3" },
  ];

  const nestedItems = [
    {
      title: "Nested Section 1",
      content: "Nested content for section 1",
      subItems: [
        { title: "Sub-section 1.1", content: "Content for sub-section 1.1" },
        { title: "Sub-section 1.2", content: "Content for sub-section 1.2" },
      ],
    },
    {
      title: "Nested Section 2",
      content: "Nested content for section 2",
      subItems: [
        { title: "Sub-section 2.1", content: "Content for sub-section 2.1" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Accordions Example</h1>
      <h2>Basic Accordion</h2>
      <BasicAccordion items={basicItems} />

      <h2>Animated Accordion</h2>
      <AnimatedAccordion items={animatedItems} />

      <h2>Multi Accordion</h2>
      <MultiAccordion items={multiItems} />

      <h2>Nested Accordion</h2>
      <NestedAccordion items={nestedItems} />
    </div>
  );
};

export default App;
