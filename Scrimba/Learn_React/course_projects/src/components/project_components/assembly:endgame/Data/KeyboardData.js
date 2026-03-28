export default [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((char, index) => ({
    id: index + 1,
    letter: char, 
    isActive: true,
    isCorrect: null,
}))