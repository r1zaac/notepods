<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor=""
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
      labelColour="dark"
    >
      <template #buttons>
        <button @click="$router.back()" class="button mr-2">Cancel</button>
        <button
          @click="handleSaveClicked"
          class="button is-danger"
          :disabled="!noteContent"
        >
          Update Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
