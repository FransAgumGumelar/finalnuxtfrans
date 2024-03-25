<template>
    
     
    <!-- sidebar 2 -->
    <v-navigation-drawer left :width="300"  class="leftSidebar" elevation="10" v-model="drawer1" app expand-on-hover >
            <v-list-item title="Satu RSSA" subtitle="Bersama Rakyat Kami Kuat"></v-list-item>
                <v-divider></v-divider>
                <v-list>
            
            <!-- MENU 1 -->
            <v-list-group value="USER">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="USER"></v-list-item>
                </template>

                    <v-list-group value="ROLE">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="ROLE"></v-list-item>
                        </template>
                        <v-list-item   title="ROLE1"  value="ROLE1" to="/user/roles/roles1"></v-list-item>
                        <v-list-item   title="ROLE2"  value="ROLE2" to="/user/roles/roles2"></v-list-item>
                        <v-list-item   title="ROLE3"  value="ROLE3" to="/user/roles/roles3"></v-list-item>
                        <v-list-item   title="ROLE4"  value="ROLE4" to="/user/roles/roles4"></v-list-item>
                        <v-list-item   title="ROLE5"  value="ROLE5" to="/user/roles/roles5"></v-list-item>
                        <v-list-item   title="ROLE6"  value="ROLE6" to="/user/roles/roles6"></v-list-item>
                        <v-list-item   title="ROLE7"  value="ROLE7" to="/user/roles/roles7"></v-list-item>
                        <v-list-item   title="ROLE8"  value="ROLE8" to="/user/roles/roles8"></v-list-item>
                        <v-list-item   title="ROLE9"  value="ROLE9" to="/user/roles/roles9"></v-list-item>
                        <v-list-item   title="ROLE10"  value="ROLE10" to="/user/roles/roles10"></v-list-item>
                        <v-list-item   title="ROLE11"  value="ROLE11" to="/user/roles/roles11"></v-list-item>
                        <v-list-item   title="ROLE12"  value="ROLE12" to="/user/roles/roles12"></v-list-item>
                        <v-list-item   title="ROLE13"  value="ROLE13" to="/user/roles/roles13"></v-list-item>
                        <v-list-item   title="ROLE14"  value="ROLE14" to="/user/roles/roles14"></v-list-item>
                        <v-list-item   title="ROLE15"  value="ROLE15" to="/user/roles/roles15"></v-list-item>
                    </v-list-group>

                    <v-list-group value="DEPARTEMENT">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="DEPARTEMENT"></v-list-item>
                        </template>
                        <v-list-item   title="DEPARTEMEN ANAK"  value="DEPARTEMEN ANAK" to="/user/departemen/userdepartemenanak"></v-list-item>
                        <v-list-item   title="DEPARTEMEN ANESTESI"  value="DEPARTEMEN ANESTESI" to="/user/departemen/userdepartemenanestesi"></v-list-item>
                        <v-list-item   title="DEPARTEMEN BAGIAN KEUANGAN"  value="DEPARTEMEN BAGIAN KEUANGAN" to="/user/departemen/userdepartemenbagiankeuangan"></v-list-item>
                        <v-list-item   title="DEPARTEMEN BANK DARAH"  value="DEPARTEMEN BANK DARAH" to="/user/departemen/userdepartemenbankdarah"></v-list-item>
                        <v-list-item   title="DEPARTEMEN BEDAH"  value="DEPARTEMEN BEDAH" to="/user/departemen/userdepartemenbedah"></v-list-item>
                        
                    </v-list-group>

                    <v-list-group value="KODE UNIT">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="KODE UNIT"></v-list-item>
                        </template>
                        <v-list-item   title="USER JOIN"  value="USER JOIN" to="/user/kdunit/userjoin"></v-list-item>
                        <v-list-item   title="KDUNIT1"  value="KDUNIT1" to="/user/kdunit/userkdunit1"></v-list-item>
                        <v-list-item   title="KDUNIT42"  value="KDUNIT42" to="/user/kdunit/userkdunit42"></v-list-item>
                        <v-list-item   title="KDUNIT46"  value="KDUNIT46" to="/user/kdunit/userkdunit46"></v-list-item>
                        <v-list-item   title="KDUNIT53"  value="KDUNIT53" to="/user/kdunit/userkdunit53"></v-list-item>
                        <v-list-item   title="KDUNIT55"  value="KDUNIT55" to="/user/kdunit/userkdunit55"></v-list-item>
                        <v-list-item   title="KDUNIT60"  value="KDUNIT60" to="/user/kdunit/userkdunit60"></v-list-item>
                        <v-list-item   title="KDUNIT61"  value="KDUNIT61" to="/user/kdunit/userkdunit61"></v-list-item>
                        <v-list-item   title="KDUNIT62"  value="KDUNIT62" to="/user/kdunit/userkdunit62"></v-list-item>
                        <v-list-item   title="KDUNIT63"  value="KDUNIT63" to="/user/kdunit/userkdunit63"></v-list-item>
                        <v-list-item   title="KDUNIT70"  value="KDUNIT70" to="/user/kdunit/userkdunit70"></v-list-item>
                        <v-list-item   title="KDUNIT71"  value="KDUNIT71" to="/user/kdunit/userkdunit71"></v-list-item>
                        <v-list-item   title="KDUNIT84"  value="KDUNIT84" to="/user/kdunit/userkdunit84"></v-list-item>
                        <v-list-item   title="KDUNIT85"  value="KDUNIT85" to="/user/kdunit/userkdunit85"></v-list-item>
                        <v-list-item   title="KDUNIT1"  value="KDUNIT1" to="/user/kdunit/userkdunit1"></v-list-item>
                        <v-list-item   title="KDUNIT1"  value="KDUNIT1" to="/user/kdunit/userkdunit1"></v-list-item>
                    </v-list-group>

                   

            </v-list-group>




            
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