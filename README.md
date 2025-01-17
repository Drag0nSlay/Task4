# Task 4: MAC Address Investigation

This task involves investigating a given MAC address to gather details about the device, including its manufacturer and potential geographic location. Below is the step-by-step approach to complete this task.

---

## **Overview**

A **MAC Address** is a unique identifier assigned to a network interface for communication on the physical network. The first 6 characters (OUI - Organizationally Unique Identifier) identify the manufacturer, while the remaining characters uniquely identify the device.

---

## **Steps to Investigate a MAC Address**

### 1. Identify the MAC Address
- MAC Address format: `00:1A:2B:3C:4D:5E`
- The first 6 characters (`00:1A:2B`) represent the **OUI**.
- The remaining characters are specific to the device.

---

### 2. Perform OUI Lookup
Use online tools to identify the manufacturer:
- [MACVendorLookup](https://macvendorlookup.com/)
- [MACAddress.io](https://macaddress.io/)
- [IEEE OUI Database](https://standards.ieee.org/products-services/regauth/index.html)

#### Example
For the MAC address `00:1A:2B:3C:4D:5E`, the OUI lookup might return:


### 3. Geolocate the Device (if applicable)
- Use network tools or logs to retrieve the associated **IP address**.
- Perform geolocation using:
  - [IPInfo.io](https://ipinfo.io/)
  - [IPStack](https://ipstack.com/)
  - [MaxMind GeoIP](https://www.maxmind.com/en/geoip-demo)

#### Tools for Network Analysis:
- **Wireshark**: Capture network packets and identify MAC addresses of connected devices.
- **Airodump-ng**: Monitor Wi-Fi traffic to find MAC addresses.

---

### 4. Use OSINT Tools
Search for publicly accessible information about the device:
- **Shodan**: Search for exposed devices and associated metadata.
- **Censys**: Perform device and network investigations.
- **Metadata Analysis**: Investigate IoT devices or routers associated with the MAC address.

---

### 5. Document Your Findings
Prepare a report with the following details:
- **Manufacturer Information**:
  - Company Name
  - Address
- **Geographic Location** (if applicable):
  - Country/City based on IP geolocation.
- **Additional Notes**:
  - Device Type (e.g., router, phone, IoT).
  - Network activity (if captured).

---

## **Tools Used**
- **MAC Address Lookup**: To identify the manufacturer.
- **Wireshark**: To monitor network traffic.
- **Airodump-ng**: For wireless network sniffing.
- **Shodan**: To locate internet-exposed devices.
- **IP Geolocation APIs**: To determine device location.

---

## **Example Investigation**
### MAC Address: `00:1A:2B:3C:4D:5E`
1. **Manufacturer**: Cisco Systems
2. **Location**: San Jose, California, USA
3. **Device Type**: Router
4. **Network Behavior**: Found in Wi-Fi traffic, associated with IP `192.168.1.1`.

---

## **Legal and Ethical Considerations**
- Ensure you have permission to monitor or investigate networks.
- Avoid violating privacy or conducting unauthorized investigations.
- Use information responsibly and within legal guidelines.

---

**Happy Hacking!**
