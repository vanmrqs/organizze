export default function semana() {
    const today        = new Date()

    const firstDay     = new Date(today.setDate(today.getDate() - today.getDay()))
    const lastDay      = new Date(today.setDate(today.getDate() - today.getDay() + 6))

    const firstWeekday = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    const offsetDate   = today.getDate() + firstWeekday - 1
    const weekNumber   = 1 + Math.floor(offsetDate / 7)

    return `Semana ${weekNumber} - ${firstDay.getDate()}/${(firstDay.getMonth() + 1).toString().padStart(2, '0')} - ${lastDay.getDate()}/${(firstDay.getMonth() + 1).toString().padStart(2, '0')}`
}