<script>
import HostComponentOne from "@/components/HostComponents/HostComponentOne.vue";
import { dados } from "@/components/HostComponents/data";

export default {
  data() {
    return {
      showMore: false,
      items: dados,
    };
  },
  components: { HostComponentOne },
};
</script>
