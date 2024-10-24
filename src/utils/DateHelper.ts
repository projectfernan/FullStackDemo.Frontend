export function FormatDateTime(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-SG', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Optional, use 24-hour format
        timeZone: 'Asia/Singapore' // Set to Singapore timezone
    }).format(date);
}