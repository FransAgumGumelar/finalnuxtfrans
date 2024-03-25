<template>
    <!-- sidebar 2 -->
    <v-navigation-drawer left :permanent="mdAndUp" class="leftSidebar" elevation="10" app :temporary="mdAndDown" v-model="drawer1" expand-on-hover>
            <v-list-item title="Satu RSSA" subtitle="Bersama Rakyat Kami Kuat"></v-list-item>
                <v-divider></v-divider>
                <v-list v-model:opened="open">
           
            <v-list-group value="Menu1">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Menu1" ></v-list-item>
                </template>

                    <v-list-group value="Menu1a">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Menu1a"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title" :value="title"></v-list-item>
                    </v-list-group>

                    <v-list-group value="Menu1b">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Menu1b"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title" :value="title" ></v-list-item>
                    </v-list-group>
            </v-list-group>

            <v-list-group value="Menu1">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Menu1" ></v-list-item>
                </template>

                    <v-list-group value="Menu1a">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Menu1a"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title" :value="title"></v-list-item>
                    </v-list-group>

                    <v-list-group value="Menu1b">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="Menu1b"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title" :value="title" ></v-list-item>
                    </v-list-group>
            </v-list-group>
            </v-list>                  
        </v-navigation-drawer>
</template>

<script setup>
  const drawer1 = ref(undefined || true);
  const drawer2 = ref(undefined || true);
</script>