<template>
    <div>
        <table>
            <tr >
                <td style="fontweight : bold">No.</td>
                <td style="fontweight : bold">Title</td>
                <td style="fontweight : bold">Writer</td>
            </tr>
            <tr v-for="(memo,index) in $store.state.memos" :key="index">
                <td>{{memo.id}}</td>
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
                <td>{{memo.writer}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    //
    data() {
        return {  
            
        }
    },
    created () {
        this.$store.dispatch('getMemoList');
    }
}
</script>