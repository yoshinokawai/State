import { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState('green');

  const colors = [
    { name: 'GREEN', value: 'green', textColor: 'white' },
    { name: 'BLUE', value: 'blue', textColor: 'white' },
    { name: 'BROWN', value: 'brown', textColor: 'white' },
    { name: 'YELLOW', value: 'yellow', textColor: 'black' },
    { name: 'RED', value: 'red', textColor: 'white' },
    { name: 'BLACK', value: 'black', textColor: 'white' },
  ];

  // Filter out the current color from buttons if desired, or show all. 
  // The image shows Blue/Brown/Yellow/Red/Black when bg is Green.
  // This implies we might hide the current color button? 
  // But standard behavior is usually just show all. I will show all for now or filter.
  // Let's show all for simplicity and usability.

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{bgColor.toUpperCase()}</Text>

        {colors.map((color) => {
          // Optional: Hide button if it's the current background color? 
          // The image shows 5 buttons. If I have 6 total colors, that matches.
          if (color.value === bgColor) return null;

          return (
            <TouchableOpacity
              key={color.name}
              style={[styles.button, { backgroundColor: color.value }]}
              onPress={() => handleColorChange(color.value)}
            >
              <Text style={[styles.buttonText, { color: color.textColor }]}>{color.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
    marginTop: 20,
  },
  button: {
    width: '90%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 5,
    // Add shadow/elevation if needed to match "button" look
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
