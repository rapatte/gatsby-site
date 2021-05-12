import React from "react"
import RecentPostsWidget from "./RecentPostsWidget"
import CategoriesWidget from "./CategoriesWidget"
import TagsWidget from './TagsWidget'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <RecentPostsWidget />{" "}
        <TagsWidget />{" "}
        <CategoriesWidget />{" "}
      </div>
    </aside>
  )
}

export default Sidebar
