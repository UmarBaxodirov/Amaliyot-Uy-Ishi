const AddBtn = document.getElementById('add_btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')
const Btn = document.getElementById('btn')
const tbody = document.getElementById('tbody')
const Email = document.getElementById('email')
const Password = document.getElementById('password')
Btn.addEventListener('click', () => {
    tbody.innerHTML += `
 <tbody id="tbody" class="gap-[15px] h-[25px]">
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    11
                                </th>
                                <td class="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                                   ${Email.value}
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                22.06.2024:10:00
                                </td>
                                <td class="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                                50%
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    <button
                                        class="pr-[20px] pl-[20px] ml-[-10px] pt-[7px] pb-[7px] bg-lime-500 rounded-[20px]">
                                        <p class="text-[white]">Pass</p>
                                    </button>
                                </td>
                                <th scope="col"
                                    class="pl-[10px] pr-[10px] pt-[10px] px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    <button
                                        class="bg-slate-300 hover:bg-slate-400 pr-[10px] ml-[10px] rounded pt-[10px] pb-[10px] hover:text-[white]">
                                        <i class="fa-solid fa-pencil ml-[10px]"></i>
                                    </button>
                                </th>
                                <th scope="col"
                                    class="pl-[10px] pr-[10px] pt-[10px] px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    <button
                                        class="bg-slate-300 hover:bg-slate-400 pr-[10px] ml-[10px] rounded pt-[10px] pb-[10px] hover:text-[white]">
                                        <i class="fa-solid fa-trash ml-[10px]"></i>
                                    </button>
                                </th>
                            </tr>
                        </tbody>
 `

})
AddBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})
closeBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

Btn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})
setTimeout(() => {
    tbody
}, );
email.value = ''
password.value = ''