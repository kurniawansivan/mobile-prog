import { View, Text, StyleSheet } from 'react-native'

const Home = (data) => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>
            FirstName: {data.firstname}
            </Text>
            <Text style={styles.text}>
            LastName: {data.lastname}
            </Text>
            <Text style={styles.text}>
            Email: {data.email}
            </Text>
            <Text style={styles.text}>
            Username: {data.username}
            </Text>
            <Text style={styles.text}>
            Password:{data.password}
            </Text>
            <Text style={styles.text}>
            Confirm Password: {data.confirmPassword}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop: 30,
    },
    text:{
        marginTop: 25,
        marginBottom: 20,
        fontSize: 17,
        marginHorizontal: 15,
    }
    });

export default Home