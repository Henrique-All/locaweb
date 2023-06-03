<script>
import FormCreateAccount from "@/components/FormCreateAccount/FormCreateAccount.vue";
import HostComponentOne from "@/components/HostComponents/HostComponentOne.vue";
export default {
  data() {
    return {
      item: JSON.parse(this.$route.query.item),
    };
  },
  components: { FormCreateAccount, HostComponentOne },
};
</script>
