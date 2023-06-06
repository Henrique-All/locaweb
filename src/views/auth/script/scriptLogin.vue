<script>
import axios from "axios";
import LoadingComponent from "@/components/Loadding/LoadingComponent.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      users: [],
      emailValidation: false,
      passwordValidation: false,
      loading: false,
    };
  },

  components: { LoadingComponent },

  mounted() {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.users.push(json);
      });
  },

  methods: {
    async login() {
      try {
        if (!this.email && this.email === "") {
          this.emailValidation = true;
          return;
        }
        if (!this.password && this.password === "") {
          this.passwordValidation = true;
          return;
        }
        this.loading = true;

        let name = "";
        let password = "";
        this.users[0].forEach((userLog) => {
          if (
            userLog.email === this.email.toLowerCase() &&
            userLog.password === this.password
          ) {
            name = userLog.username;
            password = userLog.password;
          }
        });
        const res = await axios.post("https://fakestoreapi.com/auth/login", {
          username: name,
          password: password,
        });
        localStorage.setItem("token", res.data.token);
        this.$router.push("/home");
      } catch (err) {
        console.log(err);
        this.emailValidation = true;
        this.passwordValidation = true;
        this.loading = false;
      } finally {
        setTimeout(() => {
          this.emailValidation = false;
          this.passwordValidation = false;
        }, 4000);
      }
    },
  },
};
</script>
