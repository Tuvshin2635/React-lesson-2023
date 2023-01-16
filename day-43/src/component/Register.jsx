export default function Register () {
    return (
        <div> 
            Its Register page
            <form>
                <label for="email" > Email</label>
                <input name="email" type="email"></input>

                <label for="firstname" > First name</label>
                <input name="emfirstnameail" type="text"></input>

                <label for="lastname" > last name</label>
                <input name="lastname" type="text"></input>

                <label for="password" > password </label>
                <input name="password" type="password"></input>
                <button> Register </button>
            </form>
        </div>
    )
}