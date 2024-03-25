
import { LayoutSidebar2a } from '#build/components';
<template>
<!-- <v-app>
        <LayoutSidebar1 />
        <LayoutSidebar2a/>
        <LayoutSidebar3 />
        <LayoutAppbar />
        <LayoutContentNavigation />
        <LayoutFooter />
    </v-app>  -->

    <!-- GABUNGAN -->
    <v-app>
        <LayoutSidebar1 />
        <LayoutGabungdrawer2 />
        <LayoutContentNavigation />
        <LayoutFooter />
    </v-app>

<slot />
</template>