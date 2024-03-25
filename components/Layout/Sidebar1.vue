<template>
    <!-- sidebar 1 -->
    <v-navigation-drawer width="70" theme="grey" permanent rail rounded="xl">
            <v-list-item value="dashboard" to="/" size="x-large">
                <v-img src="/oners/logosaturs.png"></v-img>
            </v-list-item>

        <v-divider></v-divider>
            
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-database-clock-outline" value="dashboard" to="/" rounded="xl"></v-list-item>
                <v-list-item prepend-icon="mdi-account-box-outline" value="messages" to="/user" rounded="xl"></v-list-item>
                <v-list-item prepend-icon="mdi-fruit-grapes-outline" value="messages" to="/buah" rounded="xl"></v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>