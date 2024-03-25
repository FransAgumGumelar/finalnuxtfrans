<template>
    

    <!-- sidebar 2 -->
    <v-navigation-drawer left :width="300" class="leftSidebar" elevation="10" app v-model="drawer1"   expand-on-hover>
                <v-list-item title="Satu RSSA" subtitle="Bersama Rakyat Kami Kuat"></v-list-item>
                    <v-divider></v-divider>                    
                <v-list>
                    <v-list-group>
                        
                    </v-list-group>      
                <v-list-item   prepend-icon="mdi-account-circle" title="BERBIJI"  to="/buah/berbiji">
                    <v-list-item-title ></v-list-item-title>
                </v-list-item>
                <v-list-item   prepend-icon="mdi-account-circle" title="TIDAK BERBIJI"  to="/buah/tidakberbiji">
                    <v-list-item-title></v-list-item-title>
                </v-list-item>
                <v-list-item   prepend-icon="mdi-account-circle" title="MASAKAN"  to="/buah/sayuran">
                    <v-list-item-title ></v-list-item-title>
                </v-list-item>

                </v-list> 
             </v-navigation-drawer>

        <!-- sidebar Kanan -->
    
    <v-navigation-drawer location="right" :width="60" theme="dark" v-model="drawer2">
            
    </v-navigation-drawer>

     <!-- APP BAR -->
     <v-app-bar>
            <v-app-bar-nav-icon class="" @click="drawer1 = !drawer1" /> SATU RSSA
            <v-spacer />
            <v-app-bar-nav-icon icon="mdi-plus-circle" size="x-large" @click="drawer2 = !drawer2" />
        </v-app-bar>

</template>

<script setup>
  const drawer1 = ref(undefined || true);
  const drawer2 = ref(undefined || true);
</script>
