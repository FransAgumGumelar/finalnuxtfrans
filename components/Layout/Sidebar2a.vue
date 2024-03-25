<template>
    <!-- sidebar 2 -->
    <v-navigation-drawer left :width="300"  class="leftSidebar" elevation="10" app expand-on-hover >
            <v-list-item title="Satu RSSA" subtitle="Bersama Rakyat Kami Kuat"></v-list-item>
                <v-divider></v-divider>
                <v-list>
            
                    <!-- MENU 1 -->
            <v-list-group value="DARAT">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="DARAT"></v-list-item>
                </template>

                    <v-list-group value="KAKI 4" >
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="KAKI 4"></v-list-item>
                        </template>
                        <v-list-item   title="KONSUMSI" value="KONSUMSI" to="/hewan/darat/kaki4/konsumsi" ></v-list-item>
                        <v-list-item   title="TIDAK KONSUMSI" value="TIDAK KONSUMSI" to="/hewan/darat/kaki4/bukankonsumsi"></v-list-item>
                    </v-list-group>

                    <v-list-group value="KAKI 2">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="KAKI 2"></v-list-item>
                        </template>
                        <v-list-item   title="KONSUMSI" value="KONSUMSI" to="/hewan/darat/kaki2/konsumsi"></v-list-item>
                        <v-list-item   title="TIDAK KONSUMSI" value="TIDAK KONSUMSI" to="/hewan/darat/kaki2/nukankonsumsi"></v-list-item>
                    </v-list-group>

                    <v-list-group value="TIDAK PUNYA KAKI">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="TIDAK PUNYA KAKI"></v-list-item>
                        </template>
                        <v-list-item   title="MELATA"  value="MELATA" to="/hewan/darat/tidakpunyakaki/melata"></v-list-item>
                        <v-list-item   title="TERBANG"  value="TERBANG" to="/hewan/darat/tidakpunyakaki/terbang"></v-list-item>
                    
                    </v-list-group>
            </v-list-group>
            
            <!-- MENU 2 -->
            <v-list-group value="LAUT">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="LAUT" ></v-list-item>
                </template>

                    <v-list-group value="IKAN IKANAN">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="IKAN IKANAN"></v-list-item>
                        </template>
                        <v-list-item    title="KONSUMSI" value="KONSUMSI" to="/hewan/laut/ikanikanan/konsumsi"></v-list-item>
                        <v-list-item    title="BUKAN KONSUMSI" value="BUKAN KONSUMSI" to="/hewan/laut/ikanikanan/bukankonsumsi"></v-list-item>
                    </v-list-group>

                    <v-list-group value="MAMALIA">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="MAMALIA"></v-list-item>
                        </template>
                        <v-list-item    title="PAUS" value="PAUS" to="/hewan/laut/mamalia/paus"></v-list-item>
                        <v-list-item    title="LUMBA - LUMBA" value="LUMBA - LUMBA" to="/hewan/laut/mamalia/lumbalumba"></v-list-item>
                        <v-list-item    title="SINGA LAUT" value="SINGA LAUT" to="/hewan/laut/mamalia/singalaut"></v-list-item>
                        <v-list-item    title="PUTRI DUYUNG" value="PUTRI DUYUNG" to="/hewan/laut/mamalia/putriduyung"></v-list-item>
                    </v-list-group>

                    
                </v-list-group>

                    <!-- MENU 3 -->
            <v-list-group value="UDARA">
                <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="UDARA" ></v-list-item>
                </template>

                    <v-list-group value="BURUNG BURUNGAN">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="BURUNG BURUNGAN"></v-list-item>
                        </template>
                        <v-list-item   title="BURUNG 1" value="BURUNG 1" to="/hewan/udara/burungburungan/burung1"></v-list-item>
                        <v-list-item   title="BURUNG 2" value="BURUNG 2" to="/hewan/udara/burungburungan/burung2"></v-list-item>
                        <v-list-item   title="BURUNG 3" value="BURUNG 3" to="/hewan/udara/burungburungan/burung3"></v-list-item>
                    </v-list-group>

                    <v-list-group value="SERANGGA">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="SERANGGA"></v-list-item>
                        </template>
                        <v-list-item    title="BURUNG 4" value="BURUNG 4" to="/hewan/udara/serangga/burung4"></v-list-item>
                        <v-list-item    title="BURUNG 5" value="BURUNG 5" to="/hewan/udara/serangga/burung5"></v-list-item>
                        <v-list-item    title="BURUNG 6" value="BURUNG 6" to="/hewan/udara/serangga/burung6"></v-list-item>
                    </v-list-group>
            </v-list-group>
            </v-list>                  
        </v-navigation-drawer>
</template>