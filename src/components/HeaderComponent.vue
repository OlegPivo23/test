<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="../assets/icons/logo.svg" alt="logo" />
      </div>
    </div>
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__list-item"><RouterLink to="/">Форма</RouterLink></li>
        <li class="header__list-item"><RouterLink to="/preview">Превью</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.1);
  background: #fff;
  margin: 0 auto;
  padding: 22px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.header__logo {
  margin-left: 20px;
}
.header__nav {
  display: flex;
  justify-content: center;
}
.header__list {
  display: flex;
  gap: 24px;
}
.header__list-item {
  list-style-type: none;

  a {
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: rgba(17, 17, 17, 0.48);
  }
}
</style>
