<template>
  <div class="accordion" id="sidebarAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingDashboard">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDashboard" aria-expanded="true" aria-controls="collapseDashboard">
          Dashboard
        </button>
      </h2>
      <div id="collapseDashboard" class="accordion-collapse collapse show" aria-labelledby="headingDashboard" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
              <li class="list-group-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/update" class="nav-link">Update</router-link>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingPosts">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePosts" aria-expanded="true" aria-controls="collapsePosts">
          Posts
        </button>
      </h2>
      <div id="collapsePosts" class="accordion-collapse collapse" aria-labelledby="headingPosts" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/posts" class="nav-link">All Posts</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add" class="nav-link">Add new</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/categories" class="nav-link">Categories</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/tags" class="nav-link">Tags</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingMedia">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMedia" aria-expanded="true" aria-controls="collapseMedia">
          Media
        </button>
      </h2>
      <div id="collapseMedia" class="accordion-collapse collapse" aria-labelledby="headingMedia" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/library" class="nav-link">Library</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add-media" class="nav-link">Add media</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingPages">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          Pages
        </button>
      </h2>
      <div id="collapsePages" class="accordion-collapse collapse" aria-labelledby="headingPages" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/pages" class="nav-link">All Pages</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add-page" class="nav-link">Add new page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <router-link to="/comments" class="nav-link text-start">Comments</router-link>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingAppearance">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAppearance" aria-expanded="true" aria-controls="collapseAppearance">
          Appearance
        </button>
      </h2>
      <div id="collapseAppearance" class="accordion-collapse collapse" aria-labelledby="headingAppearance" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/dashboard-themes" class="nav-link">Themes</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/customize" class="nav-link">Customize</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/widgets" class="nav-link">Widgets</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/menus" class="nav-link">Menus</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/header" class="nav-link">Header</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/background" class="nav-link">Background</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/theme-editor" class="nav-link">Theme Editor</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingPlugins">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePlugins" aria-expanded="true" aria-controls="collapsePlugins">
          Plugins
        </button>
      </h2>
      <div id="collapsePlugins" class="accordion-collapse collapse" aria-labelledby="headingPosts" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/installed" class="nav-link">Installed Plugins</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add-plugin" class="nav-link">Add new</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/plugin-editor" class="nav-link">Plugin Editor</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingUsers">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="true" aria-controls="collapseUsers">
          Users
        </button>
      </h2>
      <div id="collapseUsers" class="accordion-collapse collapse" aria-labelledby="headingUsers" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/users" class="nav-link">All Users</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add-user" class="nav-link">Add new</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTools">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTools" aria-expanded="true" aria-controls="collapseTools">
          Tools
        </button>
      </h2>
      <div id="collapseTools" class="accordion-collapse collapse" aria-labelledby="headingTools" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/tools" class="nav-link">Available Tools</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/import" class="nav-link">Import</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/export" class="nav-link">Export</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/site-health" class="nav-link">Site Health</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/export-personal-data" class="nav-link">Export Personal Data</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/erase-personal-data" class="nav-link">Erase Personal Data</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSettings">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="true" aria-controls="collapseSettings">
          Settings
        </button>
      </h2>
      <div id="collapseSettings" class="accordion-collapse collapse" aria-labelledby="headingSettings" data-bs-parent="#sidebarAccordion">
        <div class="accordion-body">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/general" class="nav-link">General</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/writting" class="nav-link">Writting</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/reading" class="nav-link">Reading</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/discussion" class="nav-link">Discussion</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/media-setting" class="nav-link">Media</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/permalinks" class="nav-link">Permalinks</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/privacy" class="nav-link">Privacy</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>