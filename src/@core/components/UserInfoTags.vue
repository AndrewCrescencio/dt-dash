<script lang="ts" setup>
import { IUserTag } from "@/types/user-tag";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";

const userTags = reactive<IUserTag[]>([
  { name: "Necessidade", value: "Vendas Novos" },
  { name: "Produto", value: "Corolla Cross" },
]);

const input = ref<HTMLInputElement | null>(null);

const initialTag: IUserTag = {
  name: "",
  value: "",
};

const tagData = reactive({ ...initialTag });

function handleAddTag(e: Event) {
  console.log(e);
  if (tagData.name && tagData.value) {
    userTags.push({ ...tagData });
    tagData.name = "";
    tagData.value = "";
  }
  v$.value.$reset();
  input.value?.focus();
}

function handleRemoveTag(index: number) {
  userTags.splice(index, 1)
}

// validation
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("O campo nome é obrigatório", required),
    },
    value: {
      required: helpers.withMessage("O campo valor é obrigatório", required),
    },
  };
});

const v$ = useVuelidate(rules, tagData);
</script>

<template>
  <div>
    <p class="title">tags</p>
    <ul class="tagsList">
      <li class="tag" v-for="(tag, index) in userTags" :key="index + tag.name" :id="index + tag.name" @click="handleRemoveTag(index)">
        {{ tag.name }}: {{ tag.value }}
        <v-icon icon="mdi-close" size="16" color="#4a4a4d"></v-icon>
      </li>
    </ul>
  </div>
  <form @submit.prevent="handleAddTag">
    <label for="tagName">
      Adicionar Tag
      <input type="text" id="tagName" name="nome" placeholder="nome" maxlength="20" v-model="tagData.name" required
        ref="input" @blur="v$.name.$touch"/>
      <div class="error-message" v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </div>
    </label>
    <label>
      <input type="text" name="valor" placeholder="valor" maxlength="20" v-model="tagData.value" required @blur="v$.value.$touch"/>
      <div class="error-message" v-if="v$.value.$error">
        {{ v$.value.$errors[0].$message }}
      </div>
    </label>
    <button type="submit">+</button>
  </form>
</template>

<style lang="scss" scoped>
.title {
  color: #b9b9c3;
  text-transform: uppercase;
}

.error-message {
  position: absolute;
  bottom: -24px;
  left: 0;
  height: 20px;
  font-size: 12px;
  color: red;
}

.tag {
  max-width: max-content;
  padding: 5px 10px 6px;
  background-color: #eeedfd;
  color: #7367f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.tagsList {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

form {
  margin-top: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;

  label {
    width: 100%;
    max-width: 125px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  input[type="text"] {
    max-width: 125px;
    width: 100%;
    height: 38px;
    border: 1px solid #ebeaee;
    padding: 0 12px;
    border-radius: 4px;
  }

  button {
    flex-shrink: 0;
    width: 46px;
    height: 37px;
    background-color: #7367f0;
    color: white;
    border-radius: 4px;
  }
}
</style>
