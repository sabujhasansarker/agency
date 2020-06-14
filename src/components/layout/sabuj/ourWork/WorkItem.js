import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const WorkItem = ({ item, toggle }) => {
  const [hover, setHover] = useState();
  return (
    <div className="isotop_containar">
      {item.map((it, index) => (
        <Fragment key={index}>
          {it.tag.filter((i) => i === toggle).length > 0 && (
            <div
              className="isotop_item"
              onMouseEnter={() => setHover(it.id)}
              onMouseLeave={() => setHover()}
            >
              <img src={it.img} alt="" />
              {hover === it.id && (
                <div className="content-container">
                  <div className="content-item">
                    <p>Branding</p>
                    <h2>{it.content}</h2>
                    <Link to={`/protfulio/${it.id}`} className="link">
                      read more <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default WorkItem;
