# CIS105: Computer Applications & Information Systems Lec. 1.

## Chapter 1: Everything Changes

### 1.1: The Historic Timelines

-   1903: Wright bros, invented the airplane.
-   1969: Armstrong walks on the moon.
-   2004: SpaceX Falcon 9 lands upright.
-   2015: Electreic plane crosses English Channel
-   20xx: Google Live goes online.

-   Boeing 777, commercial airline airplanes normally cost approximately $\$ 200,000,000,000$ for a singular aircraft.

### 1.2: Analytical Engne

A mechanical computing device, was a special-purpose machine designed to tabulate logarithms and trigonometric functions by evaluating finite differences to create approximating polynomials.

### 1.3: Ada Lovelace

It tok the powerful insights of a mathematicial named Ada Lovelace to realize the true potentilal of the analytical engine. She was the first person to recognize that the machine could be used for more than pure calculations. She developed the first algorithm for the engine. It was the very first example of **computer programming**.

### 1.4: Information Technology is for People

-   **Information technology (IT)**: the study, design, development, implementation, support, and management of computer-baed information systems, particularly software hardware.
    -   **People are the most important component in an information system** because **it is only a human who can conceive information from data**. Computer system is only a machinery device and human is expected to operate towards aspects on **how to perform**, **what to perform**, **what to outcome**.
-   **End-users (people)** are what make computers start.
-   **Attitude** will be the defining factor in your success when it comes to computer competency.
-   **Best practice**: a management process, technique, or method that is most effective at arriving at desired outcome or better outcome than any other process, technique, or method.
    -   **The best and effective way of practice is through persistent and consistent training and reviewing.**

### 1.5: Moore's Law

-   **Gordon Moore**: One of the founding fathers of the Intel.
-   **Computer power doubles every eighteen months**.
    -   This essentially means that, if a business purchases a computer today, in eighteen months there will be a computer available that is twice as fast.
-   Being a Leader vs. Follower controversy

### 1.6: The Cuff Smartwatch?

US rapper/producer/entrepreneur Will.i.Am announced his foray into the world of wearable tech in 2014, proclaiming to have created a device so life-changing and futuristic it'd blow our archaic mind.

-   [Wikipedia smartwatch reference](https://en.wikipedia.org/wiki/Smartwatch)

### 1.7: Types of Computer

-   **Mainframe**: Banks, Tech Companies
-   **Midrange**: Small to Mid-sized business, not as powerful.
-   **Microcomputer**: Laptops, **Desktops**, **Tablet** & Handled.

### 1.8: What is System Software?

-   System software vs. Operating system

-   System software vs. Application software

-   Operating system: Manages resources. Responsible for reading and writing data.

-   Graphical User Interface (GUI) & Command line interface.

    -   The level of an operational system layers by interface visibility.

        -   ```mermaid
            graph LR;
            a[GUI] --> b[Application software];
            b --> c[Operating system];
            c --> d[System software];
            d --> e[CLI]
            ```

### 1.9: Operating Systems/Platforms

-   **A collection of computer programs that work together to manage hardware and software to ensure that they are working properly.**
    -   Memory allocation
    -   Administer input and output of information
    -   File management
-   **Platform (OS)**: Microsoft Windows, macOS, iOS, Linux, UNIX.

### 2.0: Processes/Multitasking

-   **Process**: Any task a computer performs.
-   **Multitasking**: the execution of multiple processes over a certain period of time.

### 2.1: Memory/Disk management

-   **Operating systems**: Cache, random access memory (ram), registers, virtual memory.

-   **Primary storage vs. Secondary Storage**: RAM, hard drive, file allocation table (FAT).

    -   The table of contents of a hard drive, or the file system directory structure of a system.

    > -   Primary storage is accessed randomly which indicating the storage is only temporary without preserved.
    >
    > -   Secondary storage is the permanent storage on a specific device while user information is stored on the machine within the physical drive storage.

### 2.2: Business Computing Software

-   Software suite: Spreadsheets, word processors, database, and presentation software (aka application suite or productivity suite).

    -   Sharing information between these applications is te mot important aspect of a software suite.

-   Hot keys/shortcuts: <kbd>Ctrl</kbd>+ <kbd>C</kbd> & <kbd>Ctrl</kbd> + <kbd>V</kbd> on Windows; <kbd>Command</kbd>+ <kbd>C</kbd> & <kbd>Command</kbd> + <kbd>V</kbd> on Windows.

-   **Object linking and embedding (OLE) (Static)**

    -   **In static linking, the system linker copies the dependencies into the final executable.** At the time of linking an external library, the linker finds all dependencies that are defined in that library. And it replaces them with the corresponding functions from the library to resolve dependencies in our code. Afterward, the linker generates the final executable file that we can execute on the underlying machine.

        For example, let’s say our application calls the function _print()_ from an external library named _Library._ The assembler generates the object file with all native symbols resolved to their memory addresses. The external reference _print()_ cannot be resolved. The linker loads this library and finds the definition of _print()_ in it. Then, it maps to _print()_ to a memory location and thus resolves the dependency:

        ![Static Linking](https://www.baeldung.com/wp-content/uploads/sites/4/2022/10/Static-Linking.jpg)

        **So, a statically linked file contains our program’s code as well as the code of all the libraries it invokes**. Since we copy complete libraries, we need space on both the disk and in the main memory because the resulting file may be very large.

-   **Object linking (Dynamic)**

    -   **In dynamic linking, we copy the names of the external libraries into our final executable as unresolved symbols. We do the actual linking of these unresolved symbols only at runtime.** How? When encountering an unresolved symbol, we query RAM for it. If the corresponding library isn’t loaded, the operating system loads it in the memory. So, **the operating system performs dynamic linking for us by resolving each external symbol on the first muss.** As a result, we load only a single copy of a library in memory and all processes use it.
