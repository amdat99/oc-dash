"use client";
import React, { useState } from "react";

import { ComputerDesktopIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import List from "@/components/list/List";
import { badges, groups, members, posts, quests } from "./placeholderData";
import Fields from "@/components/form/Fields";
import ListItem from "@/components/list/ListItem";

export default function Home() {
  const [showLeftSidebarModal, setShowLeftSidebarModal] = useState(false);
  const [showRightSidebarModal, setShowRightSidebarModal] = useState(false);

  const closeSideBars = () => {
    setShowLeftSidebarModal(false);
    setShowRightSidebarModal(false);
  };

  return (
    <main className={styles.main}>
      <div className="w-100">
        {/* small screen sidebar toggles  */}
        <div className="d-flex justify-content-end mt-4 d-lg-none mb-2">
          <UserGroupIcon className={styles.topIcon} onClick={() => setShowLeftSidebarModal(true)} />
          <ComputerDesktopIcon className={styles.topIcon} />
        </div>

        {/* Top card  */}
        <Card background="#2FB9F9" height={180} className="d-flex justify-content-center">
          <div className="m-l-10">
            <h1 className="text-white h3 ">News Feed</h1>
          </div>
        </Card>

        {/*3 columns grid  */}
        <div className="row mt-4">
          <section className="col-3 d-none d-lg-block" id="left-sidebar-section">
            <LeftSidebar />
          </section>
          <section className="col-12 col-lg-6 " id="main-feed-section">
            <Card height={100} className="d-flex justify-content-center">
              <div className="d-flex justify-content-between ">
                <span className="bold text-color mt-10">All updates</span>
                <Fields
                  model={{ show: "all" }}
                  field={{ name: "show", type: "select", placeholder: "show", options: [{ value: "all", label: "Everything" }] }}
                  onChange={() => {}}
                />
              </div>
            </Card>
            {posts.map((post) => {
              return (
                <Card>
                  <ListItem showHeader data={post} />
                </Card>
              );
            })}
          </section>
          <section className="col-3 d-none d-lg-block" id="right-sidebar-section">
            <RightSidebar />
          </section>
        </div>
      </div>

      {/* sidebar Modals  */}
      {showLeftSidebarModal && (
        <>
          <div className="modal">
            <LeftSidebar />
          </div>
          <div onClick={closeSideBars} className="modal-overlay"></div>
        </>
      )}
      {showRightSidebarModal && (
        <>
          <div className="modal">
            <RightSidebar />
          </div>
          <div onClick={closeSideBars} className="modal-overlay"></div>
        </>
      )}
    </main>
  );
}

const LeftSidebar = () => {
  return (
    <>
      <Card>
        <List listData={members} title="Newest members" topTextSize="15px" />
      </Card>
      <Card>
        <List listData={quests} title="Quests" topTextSize="15px" />
      </Card>
    </>
  );
};

const RightSidebar = () => {
  return (
    <>
      <Card>
        <List listData={groups} title="Popular groups" topTextSize="15px" />
      </Card>
      <Card>
        <List listData={badges} title="Badges" topTextSize="15px" />
      </Card>
    </>
  );
};
