import React from "react";
import styles from "./list.module.css";
import { timeAgo } from "@/_lib/formatters";
import { ListData } from "./List";

type ListProps = {
  showHeader?: boolean;
  topTextSize?: string;
  contentTextSize?: string;
  hexagonIcon?: boolean;
  data: ListData;
};

function ListItem({ showHeader = false, data, topTextSize, contentTextSize, hexagonIcon }: ListProps) {
  return (
    <div className={styles.listItemContainer}>
      <div className="d-flex  w-100 justify-content-between">
        <div className="d-flex">
          <div>
            {hexagonIcon ? (
              <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                    <image xlinkHref="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" x="-25" width="150" height="100" />
                  </pattern>
                </defs>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
              </svg>
            ) : (
              <img src={data?.iconUrl} alt="random" height={40} width={40} className="rounded-circle" />
            )}
          </div>
          <div>
            {/* Top text */}
            <div className={styles.iconText} style={{ fontSize: topTextSize || "20px" }}>
              <span className={styles.listLink}>{data?.name}</span>{" "}
              {data?.nameVerified && (
                <div style={{ height: topTextSize || "20px", width: topTextSize || "20px" }} className={styles.verified}>
                  <span>✓</span>
                </div>
              )}
              {data?.memberGroup && <div className="label">{data?.memberGroup}</div>}
              <span>{data?.action}</span>
              <span className={styles.listLink}>{data?.actionLink}</span>
              <span className="ml-5">{data?.location}</span>
              <span className={styles.listLink}>{data?.locationLink}</span>
            </div>
            <div title={data?.date ? new Date(data.date).toLocaleString() : ""} className={styles.subtitle}>
              {data?.date ? timeAgo(data.date) : data?.subtitle}
            </div>
          </div>
        </div>
        {/* RightIcon adjacent to the main icon */}
        {data?.rightIcon && (
          <div>
            <img src={data?.rightIcon} alt="random" height={25} width={25} className={styles.rightIcon} />
          </div>
        )}
      </div>

      {data?.content && (
        <div dangerouslySetInnerHTML={{ __html: data?.content }} style={{ fontSize: contentTextSize || "inherit" }} className={styles.content}></div>
      )}

      {data?.image && <img src={data?.image} className={styles.image} alt="random" height={400} />}

      {data?.bottomLine && <hr className={styles.bottomLine} />}

      {/* header */}
      {showHeader && (
        <div className={styles.header}>
          <hr />
          <div className={styles.headerContent}>
            <div className="d-flex">
              {data.reactions?.map((reaction) => {
                return (
                  <div className="mr-5 pointer">
                    <span className={styles.reaction} role="img" aria-label="like">
                      {reaction.reaction}
                    </span>
                    <span className="small">{reaction.count}</span>
                  </div>
                );
              })}
            </div>
            <div className="d-flex text-color">
              <div className="small pointer bold">{data?.commentNumber || 0} Comments</div>
              <div className=" ml-10 small pointer bold">{data?.shareNumber || 0} Shares</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
