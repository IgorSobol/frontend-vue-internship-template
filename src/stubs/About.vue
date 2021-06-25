<template>
  <div class="about">
    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" />
          {{ text }}
        </span>
        </template>
        <a-list-item-meta :description="item.description">
          <a slot="title" :href="item.href">{{ item.title }}</a>
          <a-avatar slot="avatar" :src="item.avatar" />
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </a-list>
    <a-comment>
      <span slot="actions" key="comment-nested-reply-to">Reply to</span>
      <a slot="author">Han Solo</a>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <p slot="content">
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
      <a-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <p slot="content">
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
        <a-comment>
          <span slot="actions">Reply to</span>
          <a slot="author">Han Solo</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <p slot="content">
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        </a-comment>
        <a-comment>
          <span slot="actions">Reply to</span>
          <a slot="author">Han Solo</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <p slot="content">
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        </a-comment>
      </a-comment>
    </a-comment>

    <a-pagination v-model="current" :total="50" show-less-items />
  </div>
</template>

<script>
const listData = [
  {
    href: "https://www.antdv.com/",
    title: `Repo Name}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "Ant Design, Lorem ipsum dolor sit amet.",
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
];

export default {
  data() {
    return {
      listData,
      current: 2,
    };
  },
};
</script>
