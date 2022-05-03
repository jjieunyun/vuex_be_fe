<template>
    <div>
        <h1>{{$store.state.memos[this.$route.params.id-1].title}}</h1>
        <p>{{$store.state.memos[this.$route.params.id-1].memo}}</p>
        <hr>
            <ul>
                <li style="fontweight : bold">
                    Writer : Comments
                </li>
                <li v-for="(comment, index) in $store.state.comments" :key="index">
                    {{comment.name}} : {{comment.comment}}
                </li>
            </ul>
        <hr>
        <input type="text" v-model="comment">
        <button @click="addComment">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment : '',
        }
    },
    created() {
        this.$store.dispatch('getMemo',this.$route.params.id);
        this.$store.dispatch('getComments',this.$route.params.id);
    },
    methods : {
        addComment() {
            const comment = {
                memoid : this.$route.params.id,
                name : this.$store.state.user,
                comment : this.comment,
            }
            this.$store.dispatch('postComments',comment);
        }
    }
}
</script>