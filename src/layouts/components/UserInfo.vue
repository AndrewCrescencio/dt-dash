<script lang="ts" setup>
import UserInfoTags from "@/@core/components/UserInfoTags.vue";
import avatar1 from "@images/avatars/avatar-1.png";
const user = ref({ name: 'Carrie Hawkins', role: 'Frontend Developer' })
const props = defineProps({
    drawerIsOpen: {
        type: Boolean,
        required: true,
    }
})
const emit = defineEmits(['drawerChanged'])
function closeDrawer(){
  emit('drawerChanged', false)
}
</script>

<template>
  <v-navigation-drawer v-model="props.drawerIsOpen" location="right" width="360px" tag="div" temporary fixed floating>
    <div class="userInfo">
      <button class="userInfo__close" @click="closeDrawer">
        <v-icon icon="mdi-close" class="closeBtn"></v-icon>
      </button>
      <div class="userInfo__profile">
        <div>
          <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
            <VAvatar size="64" color="primary" variant="tonal">
              <VImg :src="avatar1" />
            </VAvatar>
          </VBadge>
        </div>
        <p class="userInfo__profile__name">{{ user.name }}</p>
        <p class="userInfo__profile__role">{{ user.role }}</p>
      </div>
      <div class="userInfo__about">
        <p class="userInfo__title">About</p>
        <p class="userInfo__about__text">
          White most people enjoy casino gambling, sports betting, lottery and
          bingo playing for the fun and excitement it provides, others may
          experience gambling
        </p>
      </div>
      <UserInfoTags/>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.userInfo {
  width: 100%;
  max-width: 360px;
  padding: 28px 16px;
  font-size: 14px;

  @media (min-width: 768px) {
    padding: 38px 22px;
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
  }

  &__title {
    color: #b9b9c3;
    text-transform: uppercase;
  }

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__name {
      margin-top: 12px;
      margin-bottom: 0;
      font-size: 16px;
      color: #5e5873;
    }

    &__role {
      margin-bottom: 0;
      font-size: 14px;
      color: #92909c;
    }

    margin-bottom: 52px;
  }
}</style>
