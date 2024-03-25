<template>
     

    <!-- sidebar 2 -->
    <v-navigation-drawer left :width="300" class="leftSidebar" elevation="10" app  v-model="drawer1" expand-on-hover>
                <v-list-item title="Satu RSSA" subtitle="Bersama Rakyat Kami Kuat"></v-list-item>
                    <v-divider></v-divider>                    
                <v-list>
                      
                <v-list-item   prepend-icon="mdi-account-circle" title="DAFTAR KARYAWAN RS"  to="/">
                <v-list-item-title></v-list-item-title>
                </v-list-item>
                <v-list-item   prepend-icon="mdi-account-circle" title="DETAIL KARYAWAN"  to="/detailkaryawan">
                    <v-list-item-title></v-list-item-title>
                </v-list-item>
                <v-list-item   prepend-icon="mdi-account-circle" title="ABOUT"  to="/about">
                    <v-list-item-title ></v-list-item-title>
                </v-list-item>
                <v-list-item   prepend-icon="mdi-account-circle" title="CONTACT"  to="/contact">
                    <v-list-item-title ></v-list-item-title>
                </v-list-item>

                </v-list> 
             </v-navigation-drawer>

        <!-- sidebar Kanan -->
    <v-navigation-drawer location="right" :width="600" theme="white" v-model="drawer2" temporary>
        <v-card>
            <v-card-title>
                <h2>TAMBAH DATA KARYAWAN</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="NIM">
                    </v-text-field>
                    <v-text-field label="NAMA PEGAWAI">
                    </v-text-field>
                    <v-text-field label="NAMA PEGAWAI">
                    </v-text-field>
                    <v-text-field label="NAMA PEGAWAI">
                    </v-text-field>
                    <v-text-field label="NAMA PEGAWAI">
                    </v-text-field>
                    <v-text-field label="NAMA PEGAWAI">
                    </v-text-field>
                    <v-btn outlined color="purple-accent-3">SIMPAN</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
            
    </v-navigation-drawer>

    <!-- APP BAR -->
    <v-app-bar>
            <v-app-bar-nav-icon  @click="drawer1 = !drawer1" size="x-large" color="purple-accent-3" /> SATU RSSA
            <v-spacer />
            <v-app-bar-nav-icon icon="mdi-plus-circle" size="x-large" color="purple-accent-3" @click="drawer2 = !drawer2"> 
                            
            </v-app-bar-nav-icon>
        </v-app-bar>

</template>

<script setup>


  const drawer1 = ref(undefined || true);
  const drawer2 = ref(undefined || true);
</script>
