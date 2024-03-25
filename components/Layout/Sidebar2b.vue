<template>
    <!-- sidebar 2 -->
    <v-navigation-drawer left class="leftSidebar" elevation="10" app   expand-on-hover>
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
</template>